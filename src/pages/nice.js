import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@0.9.448/build/spline-viewer.js"
      ></script>
      <spline-viewer
        loading-anim
        url="https://prod.spline.design/nK14ZQxmKpgLb1Pj/scene.splinecode"
      ></spline-viewer>
    </>
  );
}
