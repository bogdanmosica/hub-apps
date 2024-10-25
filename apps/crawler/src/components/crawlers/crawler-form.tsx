'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@hub/shadcn-ui/ui/use-toast';
import { Button } from '@hub/shadcn-ui/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@hub/shadcn-ui/ui/form';
import { Input } from '@hub/shadcn-ui/ui/input';
import { PlusCircle, Trash } from 'lucide-react';
import { CrawlDataResponseDto, GenericDataItem } from 'types/crawl-dto';

// Define the schema with TypeScript types
const FormSchema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
  selectors: z
    .array(
      z.object({
        name: z.string().min(1, { message: 'Name cannot be empty.' }),
        selector: z.string().min(1, { message: 'Selector cannot be empty.' }),
      })
    )
    .min(1, { message: 'At least one selector is required.' }),
});

type FormValues = z.infer<typeof FormSchema>;

type CrawlFormProps = {
  data: GenericDataItem;
  onData: (data: FormValues) => void;
};
const CrawlForm = ({ data, onData }: CrawlFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: data ?? {
      url: '',
      selectors: [{ name: '', selector: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'selectors',
  });

  async function onSubmit(data: FormValues) {
    try {
      const response = await fetch('/api/crawls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: FormValues = await response.json();
      if (response.ok) {
        onData(result);
        toast({
          title: 'Crawling successful!',
          description: (
            <div className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
              <code className='text-white'>
                {JSON.stringify(result, null, 2)}
              </code>
            </div>
          ),
        });
      } else {
        toast({
          title: 'Crawling failed',
          description: response.text(),
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong during the crawl.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder='https://example.com' {...field} />
              </FormControl>
              <FormDescription>
                Enter the URL you want to crawl.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormLabel>Selectors</FormLabel>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className='space-y-4 mb-4 border p-4 rounded-lg'
            >
              <FormField
                control={form.control}
                name={`selectors.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selector Name</FormLabel>
                    <FormControl>
                      <Input placeholder='e.g., Price' {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a name for the selector.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`selectors.${index}.selector`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CSS Selector</FormLabel>
                    <FormControl>
                      <Input placeholder='.class-name, #id, tag' {...field} />
                    </FormControl>
                    <FormDescription>
                      Specify the CSS selector to scrape.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant='destructive'
                type='button'
                onClick={() => remove(index)}
                className='w-full'
              >
                <Trash className='mr-2 h-4 w-4' />
                Remove Selector
              </Button>
            </div>
          ))}

          <Button
            variant='outline'
            type='button'
            onClick={() => append({ name: '', selector: '' })}
            className='w-full'
          >
            <PlusCircle className='mr-2 h-4 w-4' />
            Add Another Selector
          </Button>
        </div>

        <Button type='submit'>Crawl</Button>
      </form>
    </Form>
  );
};

export default CrawlForm;
