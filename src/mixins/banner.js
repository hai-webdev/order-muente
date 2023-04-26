import { getScodeInfo } from "@/api/getScode";
export default function (id) {
  return {
    data() {
      return {
        sortBanner: "",
        sortName: "",
      };
    },
    async created() {
      const data = await getScodeInfo(id);
      this.sortBanner = data.data.pic;
      this.sortName = data.data.name;
    },
  };
}
