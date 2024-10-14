// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
import type { PlopTypes } from '@turbo/gen';

import generatePlopActionsArray from './utils/generateActions';
import setActionTypePackageJsonGenerator from './utils/setActionTypePackageJsonGenerator';
import setActionTypeTsConfigGenerator from './utils/setActionTypeTsConfigGenerator';

import { packageJsonDependencies } from './constants/packageJsonDependencies';
import { tsConfigPaths } from './constants/tsConfigPaths';
import { CustomGeneratorPlopTypes } from './constants/PlopTypes/CustomGeneratorPlopTypes';
import { exec } from 'child_process';

type Answers = Record<string, any>;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  setActionTypePackageJsonGenerator(plop);
  setActionTypeTsConfigGenerator(plop);

  const templatesActions = generatePlopActionsArray();

  plop.setGenerator(CustomGeneratorPlopTypes.NextBoilerplate, {
    description: 'Adds a new app dashboard page template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the app you want to boilerplate?',
      },
      {
        type: 'list',
        name: 'template',
        message: 'What type of boilerplate you want to generate?',
        choices: ['Saas', 'Ecommerce', 'AdminDashboard'],
      },
    ],
    actions: function () {
      return [...templatesActions, packageJsonDependencies, tsConfigPaths];
    },
  });

  plop.setHelper('generateType', function (fieldsObject, options) {
    function generate(fields: Record<string, any>, indent = 2) {
      let result = '';
      const indentSpaces = ' '.repeat(indent);
      for (const [key, value] of Object.entries(fields)) {
        if (typeof value === 'string') {
          result += `${indentSpaces}${key}: ${value};\n`;
        } else if (typeof value === 'object') {
          result += `${indentSpaces}${key}: {\n`;
          result += generate(value, indent + 2);
          result += `${indentSpaces}};\n`;
        }
      }
      return result;
    }
    return generate(fieldsObject);
  });

  plop.setActionType('prismaGenerate', (answers, config, plop) => {
    return new Promise((resolve, reject) => {
      exec('npx prisma generate --schema=packages/prisma-database/prisma/schema.prisma', (error, stdout, stderr) => {
        if (error) {
          reject(`Prisma generate failed: ${stderr}`);
        } else {
          resolve('Prisma client generated successfully.');
        }
      });
    });
  });

  plop.setGenerator(CustomGeneratorPlopTypes.NextApiRoute, {
    description: 'Adds a api route template',
    prompts: [
      {
        type: 'input',
        name: 'appName',
        message: 'What is the name of the app you want to create an api?',
      },
      {
        type: 'input',
        name: 'entityName',
        message: 'What is the name of the entity you want to create an api?',
      },
      {
        type: 'input',
        name: 'fields',
        message: 'Enter the fields for the entity in JSON format:',
      },
      // {
      //   type: 'input',
      //   name: 'prismaFields',
      //   message: 'Enter the fields for the entity in Prisma schema syntax (e.g., name String, age Int):',
      // },
    ],
    actions: function () {
      return [
        function (answers: Answers) {
          const fieldsArray = answers.prismaFields.split(',').map((field: string) => field.trim());
          answers.fieldsArray = fieldsArray;
          return '';
        },
        function (answers: Answers) {
          try {
            answers.fieldsObject = JSON.parse(answers.fields);
          } catch (error) {
            throw new Error('Invalid JSON format for fields.');
          }
          return '';
        },
        {
          type: 'add',
          path: 'apps/{{appName}}/src/actions/{{kebabCase entityName}}/index.ts',
          templateFile: 'templates/next-api/actions.hbs',
        },
        // Create the main API route file
        {
          type: 'add',
          path: 'apps/{{appName}}/src/app/api/{{kebabCase entityName}}/route.ts',
          templateFile: 'templates/next-api/api-route.hbs',
        },
        // Create the dynamic API route file
        {
          type: 'add',
          path: 'apps/{{appName}}/src/app/api/{{kebabCase entityName}}/[{{kebabCase entityName}}Id]/route.ts',
          templateFile: 'templates/next-api/api-route-id.hbs',
        },
        // {
        //   type: 'append',
        //   path: 'packages/prisma-database//prisma/schema.prisma',
        //   pattern: /^(?=\ngenerator)/m, // Insert before the generator block
        //   templateFile: 'templates/next-api/schema-model.hbs',
        // },
        // // Action to run the Prisma CLI command
        // {
        //   type: 'prismaGenerate',
        // },
      ];
    },
  });
}
