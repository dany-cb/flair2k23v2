// import Header from "./common/components/Header";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className={styles.logo}>
        <svg width="600px" viewBox="0 0 800 160">
          <text
            fill="none"
            stroke="#fff"
            x="0"
            y="120"
            strokeWidth="5"
            fontSize="120"
            fontFamily="'Faustina', sans-serif"
            fontWeight="800"
            className="is-active"
          >
            Coming soon!
          </text>
          <path
            className={styles["underline"]}
            data-name="Path 1"
            d="M107,318.311s18.935-20,32.92,0,31.85,0,31.85,0,18.736-19.584,33.161,0,29.294,0,29.294,0,23.385-16.934,35.261,0,34.535,10.772,35.875,0,32.49-14.143,33.135,0,41.233,11.789,42.7,0,33.415-7.747,32.62,0,25.6,19.335,34.531,0"
            transform="translate(60 -188.421)"
            fill="none"
            stroke="#00BFFF"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}
