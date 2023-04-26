import loadingIcon from "@/assets/images/icon/loading.svg";
import styles from "./index.module.less";

function getLoadingImg() {
  const image = document.querySelector("img[data-rols='loading']");
  return image;
}

/**
 * 创建Icon loading 图片
 */
function createLoadingImg() {
  const image = new Image();
  image.dataset.rols = "loading";
  image.className = styles.loading;
  image.src = loadingIcon;
  return image;
}

export default function (el, binding) {
  const currentImg = getLoadingImg();
  if (binding.value) {
    if (!currentImg) {
      const image = createLoadingImg();
      el.append(image);
    }
  } else {
    // 删除loading
    if (currentImg) {
      currentImg.remove();
    }
  }
}
