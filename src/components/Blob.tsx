import styles from "./Blob.module.css";

type BlobProps = {
  color: string;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
};

export default function Blob({ color, pos }: BlobProps) {
  return (
    <div
      className={styles.blob}
      aria-hidden="true"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        ...pos,
      }}
    />
  );
}
