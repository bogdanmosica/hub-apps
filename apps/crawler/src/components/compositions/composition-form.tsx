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
import { Card } from '@hub/shadcn-ui/ui/card';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@hub/shadcn-ui/ui/select';
import { Slider } from '@hub/shadcn-ui/ui/slider';
import { RadioGroup, RadioGroupItem } from '@hub/shadcn-ui/ui/radio-group';
import { Label } from '@hub/shadcn-ui/ui/label';

// Define the schema with TypeScript types using Zod
const CompositionSchema = z.object({
  name: z.string().min(1, { message: 'Composition name is required.' }),
  videoUrl: z.string().url({ message: 'Please enter a valid video URL.' }),
  musicUrl: z.string().url({ message: 'Please enter a valid music URL.' }),
  orientation: z.string().min(1, { message: 'Orientation is required.' }),
  animation: z.string().min(1, { message: 'Animation is required.' }),
  volume: z.number().min(0).max(100),
});

type FormValues = z.infer<typeof CompositionSchema>;

type CompositionFormProps = {
  data?: FormValues;
  onData: (data: FormValues) => void;
};

const CompositionForm = ({ data, onData }: CompositionFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CompositionSchema),
    defaultValues: data ?? {
      name: '',
      videoUrl: '',
      musicUrl: '',
      orientation: 'landscape',
      animation: 'none',
      volume: 50,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('/api/compositions', {
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
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {/* Composition Name */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Composition Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter composition name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Video URL */}
        <FormField
          control={form.control}
          name='videoUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video URL</FormLabel>
              <FormControl>
                <Input placeholder='Enter video URL' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Music URL */}
        <FormField
          control={form.control}
          name='musicUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Music URL</FormLabel>
              <FormControl>
                <Input placeholder='Enter music URL' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Orientation */}
        <FormField
          control={form.control}
          name='orientation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orientation</FormLabel>
              <RadioGroup
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='landscape' id='landscape' />
                  <Label htmlFor='landscape'>Landscape</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='portrait' id='portrait' />
                  <Label htmlFor='portrait'>Portrait</Label>
                </div>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Animation */}
        <FormField
          control={form.control}
          name='animation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Animation</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder='Select animation' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='none'>None</SelectItem>
                  <SelectItem value='fade'>Fade</SelectItem>
                  <SelectItem value='slide'>Slide</SelectItem>
                  <SelectItem value='zoom'>Zoom</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Volume */}
        <FormField
          control={form.control}
          name='volume'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Volume</FormLabel>
              <Slider
                defaultValue={[field.value]}
                max={100}
                step={1}
                onValueChange={(value) => field.onChange(value[0])}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          Create Composition
        </Button>
      </form>
    </Form>
  );
};

export default CompositionForm;
