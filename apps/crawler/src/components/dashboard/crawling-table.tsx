import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@hub/shadcn-ui/ui/table';
import { Checkbox } from '@hub/shadcn-ui/ui/checkbox';
import { Button } from '@hub/shadcn-ui/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@hub/shadcn-ui/ui/dialog';
import { Input } from '@hub/shadcn-ui/ui/input';
import { Slider } from '@hub/shadcn-ui/ui/slider';
import { Select } from '@hub/shadcn-ui/ui/select';
import { GenericDataItem, GenericDataList } from 'types/crawl-dto';

type ParsedEntity = {
  isSelected: boolean;
  name: string; // Add the name property to ParsedEntity
} & GenericDataItem;

interface ParsedDataProps {
  parsedData: GenericDataList | ParsedEntity[];
}

const CrawlingTable = ({ parsedData = [] }: ParsedDataProps) => {
  const [data, setData] = useState<ParsedEntity[] | GenericDataList>(
    parsedData
  );
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [settings, setSettings] = useState({
    voice: '',
    rate: 1,
  });
  console.log({ data, parsedData });

  useEffect(() => {
    setData(parsedData);
  }, [parsedData]);

  const handleCheckboxChange = (index: number) => {
    const updatedData = [...data];
    updatedData[index].isSelected = !updatedData[index].isSelected;
    setData(updatedData);
  };

  const handlePlayAction = (index: number) => {
    setSelectedIndex(index);
    setOpen(true); // Open the settings dialog
  };

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveSettings = async () => {
    const item = data[selectedIndex!];
    const textToConvert = item.name || ''; // Assume we're converting 'name' to speech, you can modify this based on the structure

    try {
      const response = await fetch('/api/generate-mp3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: textToConvert,
          voice: settings.voice,
          rate: settings.rate,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('MP3 generated, URL: ', result.url);
      } else {
        console.error('Failed to generate MP3:', result.message);
      }
    } catch (error) {
      console.error('Error generating MP3:', error);
    }

    setOpen(false);
  };

  return (
    <>
      <Table>
        <TableCaption>List of parsed data from crawling</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            {Object.keys(parsedData[0] ?? {}).map((key) =>
              key !== 'isSelected' ? (
                <TableHead key={key}>{key}</TableHead>
              ) : null
            )}
            <TableHead>Play</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>
                <Checkbox
                  checked={item.isSelected as boolean}
                  onCheckedChange={() => handleCheckboxChange(rowIndex)}
                />
              </TableCell>
              {Object.entries(parsedData[0] ?? {}).map(([key, value]) =>
                key !== 'isSelected' ? (
                  <TableCell key={key}>{String(item[key]) || '-'}</TableCell>
                ) : null
              )}
              <TableCell>
                <Button onClick={() => handlePlayAction(rowIndex)}>Play</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* ShadCN Dialog or Drawer for Settings */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings for Audio Generation</DialogTitle>
          </DialogHeader>

          {/* Voice selection */}
          <div className='mb-4'>
            <label
              htmlFor='voice'
              className='block text-sm font-medium text-gray-700'
            >
              Select Voice
            </label>
            <Select
              onValueChange={(value) => handleSettingChange('voice', value)}
              defaultValue={settings.voice}
            >
              <option value='voice1'>Voice 1</option>
              <option value='voice2'>Voice 2</option>
              <option value='voice3'>Voice 3</option>
            </Select>
          </div>

          {/* Rate selection */}
          <div className='mb-4'>
            <label
              htmlFor='rate'
              className='block text-sm font-medium text-gray-700'
            >
              Rate
            </label>
            <Slider
              value={[settings.rate]}
              min={0.5}
              max={2}
              step={0.1}
              onValueChange={(value) => handleSettingChange('rate', value[0])}
            />
            <Input
              type='number'
              value={settings.rate}
              readOnly
              className='mt-2'
            />
          </div>

          <DialogFooter>
            <Button onClick={() => handleSaveSettings()}>Save Settings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CrawlingTable;
