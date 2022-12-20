import Container from "../../components/Container";

const Contact = () => {
  return (
    <Container>
      <div className="w-full xl:w-6/12">
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
                placeholder="Abu Abdirohman"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="programmerbarokah@gmail.com"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="phone" className="mb-2 text-lg">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 (290) 313 354"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="company" className="mb-2 text-lg">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Programmer Barokah"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="employee" className="mb-2 text-lg">
                Employee
              </label>
              <input
                type="text"
                name="employee"
                id="employee"
                placeholder="354"
                className="rounded-full border border-gray-300 px-4 py-2 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary w-full rounded-full py-3 text-white"
            >
              Request Now
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
