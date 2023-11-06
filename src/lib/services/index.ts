import {IconLibrary} from '../../assets/icon';

const renderFacilities = (facility: string, tone?: string) => {
  switch (facility) {
    case 'ac':
      return tone
        ? IconLibrary.AIRCONDITIONER_WHITE
        : IconLibrary.AIRCONDITIONER;
    case 'tv':
      return tone ? IconLibrary.TV_WHITE : IconLibrary.TV;
    case 'whiteboard':
      return tone ? IconLibrary.WHITEBOARD_WHITE : IconLibrary.WHITEBOARD;
    case 'projector':
      return tone ? IconLibrary.PROJECTOR_WHITE : IconLibrary.PROJECTOR;
    case 'webcam':
      return tone ? IconLibrary.VIDEOCALL_WHITE : IconLibrary.VIDEOCALL;
    case 'fax':
      return tone ? IconLibrary.FAXMACHINE_WHITE : IconLibrary.FAXMACHINE;
    case 'wifi':
      return tone ? IconLibrary.WIFIROUTER_WHITE : IconLibrary.WIFIROUTER;
  }
};

export default renderFacilities;
