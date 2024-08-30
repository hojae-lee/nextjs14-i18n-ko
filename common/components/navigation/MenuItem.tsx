import Link from "next/link";

interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem = ({ href, text }: MenuItemProps) => {
  return (
    <Link href={href}>
      <span className="text-gray-800 hover:text-gray-600 cursor-pointer">
        {text}
      </span>
    </Link>
  );
};

export default MenuItem;
