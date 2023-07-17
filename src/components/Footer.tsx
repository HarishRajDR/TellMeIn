import { OcticonMarkGithub16 } from "./GitHubLogo";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around gap-2">
      <h3 className="text-lg">
        Created by{" "}
        <span className="font-bold hover:underline">
          <a href="https://github.com/HarishRajDR/" target="_blank">
            Harish Raj D R
          </a>
        </span>
      </h3>
      <a href="https://github.com/HarishRajDR/TellMeIn" target="_blank">
        <span className="text-lg inline-flex items-center gap-1 hover:underline">
          <OcticonMarkGithub16 /> GitHub
        </span>
      </a>
    </footer>
  );
}

export default Footer;
