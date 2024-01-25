import appConfig from "@/src/config";
import { Home } from "@/src/containers";
const getDataTrending = async () => {
  try {
    const rs = await fetch(
      `${appConfig.apiUrl}/trending/all/day?api_key=${appConfig.keyapi}&language=vi-VN`,
      {
        headers: {
          cache: "no-store",
        },
      }
    ).then((res) => res.json());
    return {
      dataTrendingSever: rs,
    };
  } catch (error) {
    console.log(error);
  }
};
export default async function IndexScreenHome() {
  const { dataTrendingSever }: any = await getDataTrending();
  return <Home dataTrendingSever={dataTrendingSever} />;
}
