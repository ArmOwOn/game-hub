import useData from "./useData";

interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platfrom>("/platforms/lists/parents");

export default usePlatforms;
