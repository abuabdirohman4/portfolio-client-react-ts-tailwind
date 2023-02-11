import Container from "../../components/Container";
import IconLinkedln from "../../assets/icons/linkedln.svg";
import IconTwitter from "../../assets/icons/twitter.svg";
import IconInstagram from "../../assets/icons/instagram.svg";

const Contact = () => {
  return (
    <Container>
      <h1 className="text-[22px] font-semibold" id="contact">
        Contact Me
      </h1>
      <div className="w-full xl:grid xl:grid-cols-2">
        <div className="rounded-[30px] bg-white p-8">
          <form>
            <div className="mb-5 flex flex-col">
              <label htmlFor="FullName" className="mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Name"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="phone" className="mb-2 text-lg">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="rounded-xl border border-gray-300 px-4 py-2 outline-none"
                rows={10}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 text-white"
            >
              Request Now
            </button>
          </form>
        </div>
        <div className="hidden xl:block">
          <div className="mx-auto mt-28 w-96 rounded-xl bg-[#F7F7FB] px-12 py-12">
            <div className="px-4">
              <h3 className="font-bold text-black">Connect Me</h3>
              <p className="text-[#808080]">Some place to connect with me</p>
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abuabdirohman/"
              className="mt-5 flex cursor-pointer items-center rounded-xl px-4 py-1 hover:bg-blue-200"
            >
              <div>
                <img
                  src={IconLinkedln}
                  alt="Icon Linkedln"
                  className="mr-3 h-9 w-9 rounded-full bg-[#2A66BC]"
                />
              </div>
              <div>
                <p className="font-medium text-[#151A26]">Linkedln</p>
                <p className="text-[#A3A5AA]">abuabdirohman</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/abuabdirohman4"
              className="mt-5 flex cursor-pointer items-center rounded-xl px-4 py-1 hover:bg-blue-100"
            >
              <div>
                <img
                  src={IconTwitter}
                  alt="Icon Linkedln"
                  className="mr-3 h-9 w-9 rounded-full bg-[#1DA1F3] px-2"
                />
              </div>
              <div>
                <p className="font-medium text-[#151A26]">Twitter</p>
                <p className="text-[#A3A5AA]">abuabdirohman4</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/abuabdirohman4/"
              className="mt-5 flex cursor-pointer items-center rounded-xl px-4 py-1 hover:bg-red-100"
            >
              <div>
                <img
                  src={IconInstagram}
                  alt="Icon Linkedln"
                  className="mr-3 h-9 w-9 rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-[#151A26]">Instagram</p>
                <p className="text-[#A3A5AA]">abuabdirohman4</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
