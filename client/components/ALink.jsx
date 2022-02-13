import Link from "next/link";

export default function ALink({
  children,
  className,
  content,
  style,
  ...props
}) {
  const preventDefault = (e) => {
    if (props.href === "#") {
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Link {...props}>
      <a className={className} style={style} onClick={preventDefault}>
        {children}
      </a>
    </Link>
  );
}
