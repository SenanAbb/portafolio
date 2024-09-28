import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpegbar");
  return (
    <form
      className="w-[300px] sm:w-[500px] lg:w-[800px] h-auto mt-10 flex flex-col gap-5 bg-gradient-to-tr from-blue-900/40 to-blue-950/20 drop-shadow-sm shadow-inner-custom rounded-md p-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className="text-white" htmlFor="name">
          Name
        </label>
        <input id="name" type="text" name="name" placeholder="John Wick" />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="email">
          Email Address
        </label>
        <input id="email" type="email" name="email" placeholder="ex@ex.com" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label className="text-white" htmlFor="email">
          Phone
        </label>
        <input id="phone" type="text" name="phone" placeholder="(+1) 123456" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label className="text-white" htmlFor="email">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="I need a website 😊"
        />
      </div>

      <div className="flex flex-col items-center gap-4 mx-auto mt-2">
        <button
          className="w-20 bg-gradient-to-tr from-blue-950 to-blue-light text-white px-4 py-2 rounded-md cursor-pointer hover:text-white hover:bg-gradient-to-tr hover:from-blue-950 hover:to-blue-900"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        {state.succeeded && <p>¡Gracias por tu mensaje!</p>}
      </div>
    </form>
  );
}

export default ContactForm;
