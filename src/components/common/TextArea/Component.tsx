import styles from './TextArea.module.scss';

export default function TextArea({ status = 'default', disabled = false }) {
  let inputStyles = styles.textarea;

  switch (status) {
    case 'default':
      inputStyles = styles.textarea + ' ' + styles.outline;
      break;
    case 'error':
      inputStyles = styles.textarea + ' ' + styles.error;
      break;
    case 'success':
      inputStyles = styles.textarea + ' ' + styles.success;
      break;
  }
  if (disabled === true) {
    inputStyles = styles.textarea + ' ' + styles.disabled;
  }
  return (
    <textarea
      className={inputStyles}
      placeholder="placeholder"
      disabled={disabled}
    />
  );
}
