import {MPixCardLargeProps} from './types';

export const MOCK_DATA = {
  meetingRoom: [
    {
      label: 'Einstein - Meeting Room',
      value: '001',
    },
    {
      label: 'Einstein - Conference Room',
      value: '002',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ],
  floors: [
    {
      label: '1',
      value: '001',
    },
    {
      label: '2',
      value: '002',
    },
    {
      label: '3',
      value: '003',
    },
  ],
  repeatOptions: [
    {
      label: 'Repeat',
      value: '001',
    },
    {
      label: "Doesn't Repeat",
      value: '002',
    },
  ],
};

export const mockDataOne: MPixCardLargeProps = {
  thumbImage: require('../assets/Image/tile_pic_one.png'),
  title: 'Annual Audit Meeting',
  subTitle: 'EInstein - Meeting Room',
  date: 'Aug 10, 2022',
  time: '10:00 AM - 11:00 AM',
  peopleCount: 2,
  id: '#BRID02102',
  facilities: ['ac', 'tv', 'whiteboard', 'projector'],
  headerPriority: true,
};

export const mockDataTwo: MPixCardLargeProps = {
  thumbImage: require('../assets/Image/tile_pic_one.png'),
  title: 'Annual Audit Meeting',
  subTitle: 'EInstein - Meeting Room',
  date: 'Aug 10, 2022',
  time: '10:00 AM - 11:00 AM',
  peopleCount: 2,
  id: '#BRID02102',
  facilities: ['ac', 'tv', 'whiteboard', 'projector'],
  headerPriority: true,
};

export const mockDataThree: MPixCardLargeProps = {
  thumbImage: require('../assets/Image/tile_pic_one.png'),
  title: 'Annual Audit Meeting',
  subTitle: 'EInstein - Meeting Room',
  date: 'Aug 10, 2022',
  time: '10:00 AM - 11:00 AM',
  peopleCount: 2,
  id: '#BRID02102',
  facilities: ['ac', 'tv', 'whiteboard', 'projector'],
  headerPriority: false,
};

export const bookServicesMock: MPixCardLargeProps[] = [
  {
    thumbImage: require('../assets/Image/tile_pic_one.png'),
    title: 'Annual Audit Meeting',
    subTitle: 'EInstein - Meeting Room',
    date: 'Aug 10, 2022',
    time: '10:00 AM - 11:00 AM',
    peopleCount: 2,
    id: '#BRID02102',
    facilities: ['ac', 'tv', 'whiteboard', 'projector'],
  },
  {
    thumbImage: require('../assets/Image/tile_pic_one.png'),
    title: 'Sales Meeting',
    subTitle: 'Newton - Meeting Room',
    date: 'Aug 12, 2022',
    time: '10:00 AM - 11:00 AM',
    peopleCount: 6,
    id: '#BRID02104',
    facilities: ['ac', 'webcam', 'fax', 'wifi'],
  },
  {
    thumbImage: require('../assets/Image/tile_pic_one.png'),
    title: 'Performance Meeting',
    subTitle: 'Sydney - Meeting Room',
    date: 'Aug 14, 2022',
    time: '02:00 PM - 04:00 PM',
    peopleCount: 4,
    id: '#BRID02108',
    facilities: [
      'ac',
      'tv',
      'whiteboard',
      'projector',
      'webcam',
      'fax',
      'wifi',
    ],
  },
];
