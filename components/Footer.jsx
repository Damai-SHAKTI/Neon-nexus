export default function Footer() {
  return (
    <footer className="glowing py-2 bg-black px-4 flex items-center justify-between">
        <p className="text-sm">
            Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <a href="">
            <img width="40" src="/instagram.png" />
        </a>
    </footer>
  )
}
