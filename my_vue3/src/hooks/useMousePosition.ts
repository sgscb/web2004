import { onMounted, onUnmounted, reactive, toRefs } from 'vue'
interface DataProps {
  x: number;
  y: number;
}
function useMounsePosition() {
  // 鼠标追踪
  // const x = ref(0);
  // const y = ref(0);
  // const updateMouse = (e: MouseEvent) => {
  //   x.value = e.pageX;
  //   y.value = e.pageY;
  // };

  const data: DataProps = reactive({
    x: 0,
    y: 0
  })
  const updateMouse = (e: MouseEvent) => {
    data.x = e.clientX
    data.y = e.clientY
  }
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });
  const dataResult = toRefs(data)
  return { ...dataResult }
}
export default useMounsePosition 