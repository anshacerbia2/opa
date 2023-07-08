import styles from "../../styles/components/modal-svg-icon.module.scss";

interface IModalSvgIconProps {
  success?: boolean;
  error?: boolean;
}

const ModalSvgIcon = ({ success, error }: IModalSvgIconProps) => {
  return (
    <div className={styles.container}>
      <svg height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
        {success && (
          <>
            <circle
              className={styles["success-circle"]}
              fill="#5bb543"
              cx="24"
              cy="24"
              r="22"
            />
            <path
              className={styles.tick}
              fill="none"
              stroke="#FFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M14 27l5.917 4.917L34 17"
            />
          </>
        )}
        {error && (
          <>
            <circle
              className={styles["error-circle"]}
              fill="#ef4444"
              cx="24"
              cy="24"
              r="22"
            />
            <path
              className={styles.cross}
              fill="none"
              stroke="#FFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M16 16l16 16M32 16L16 32"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default ModalSvgIcon;
