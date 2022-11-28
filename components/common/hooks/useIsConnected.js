import { useNetInfo } from "@react-native-community/netinfo";

const useIsConnected = () => {
  const netInfo = useNetInfo();
  return netInfo.isConnected;
};

export default useIsConnected
