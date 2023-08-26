import { motion } from "framer-motion";

export default function Events() {
  return (
    <>
      <section>
        <motion.div
          layout
          animate={{ x: 100 }}
          transition={{ delay: 1, ease: "easeIn" }}
        >
          <h6>PITCH BLACK</h6>
        </motion.div>
      </section>
    </>
  );
}
