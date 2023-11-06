import {ImageSourcePropType} from 'react-native';

export type Navigation = {
  navigate: (scene: string) => void;
};

export type MPixCardLargeProps = {
  thumbImage: ImageSourcePropType;
  title: string;
  subTitle: string;
  date: string;
  time: string;
  peopleCount: number;
  id: string;
  facilities: string[];
  headerPriority?: boolean;
};

export type MPixThickHeaderProps = {
  thumbImage: ImageSourcePropType;
  title: string;
  subTitle: string;
  date: string;
  time: string;
  peopleCount: number;
  id: string;
  facilities: string[];
  handleClick: (flag: boolean) => void;
  headerPriority: boolean;
};
