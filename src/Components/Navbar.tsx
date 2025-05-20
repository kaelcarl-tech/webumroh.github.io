import bmhLogo from '../assets/images/bmhLogo.svg';

export default function Navbar() {
  return (
    <header className="flex w-full items-end justify-between py-4">
      <a href="/" className="pl-8">
        <img src={bmhLogo} alt="BMH Logo" />
      </a>
      <ul className="flex justify-between gap-4 font-Osans uppercase text-white">
        <li>Home</li>
        <li>Acak Undian</li>
        <li>Hasil Undian</li>
        <li>Maintenance</li>
      </ul>
    </header>
  );
}
