import { PermissionsAndroid } from 'react-native';
import {log,warn} from "./log"

const hasPermission = async (permission) => {
  try {
    return await PermissionsAndroid.check(permission);
  } catch (err) {
    warn(err, 'PERMISSION CHECK');
  }
  return false;
};

const check = async (permission) => {
  log(permission);
  if (await hasPermission(permission)) {
    return await true;
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        permission,
        {
          title: 'Yes, we do',
          message: 'Please give us your Permissions',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        log('permission enabled');
        return await true;
      } else {
        log('permission denied');
        return await false;
      }
    } catch (err) {
      warn(err);
    }
  }
};

export default check;