import styles from "./FogMask.module.css";

const STRIPS = [
   { top: 0, height: 204, blur: 24 },
  
 
 

  

];

export default function FogMask() {
  return (
    <div className={styles.container} aria-hidden="true">
      {STRIPS.map((s, i) => (
        <div
          key={i}
          className={styles.strip}
          style={{
            top: s.top,
            height: s.height,
            backdropFilter: `blur(${s.blur}px)`,
            WebkitBackdropFilter: `blur(${s.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
