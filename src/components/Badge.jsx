function Badge({ label, value }) {
  return (
    <div style={styles.badge}>
      <span style={styles.label}>{label}:</span>
      <span style={styles.value}>{value}</span>
    </div>
  );
}

const styles = {
  badge: {
    display: "inline-flex",
    gap: "8px",
    padding: "8px 12px",
    margin: "6px",
    borderRadius: "6px",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    color: "#007acc",
  },
};

export default Badge;
