import PrimaryButton from "../../shared/Buttons/PrimaryButton";
import Container from "../../shared/Container";
import ReservationInputField from "./ReservationInputField";

const formFields = [
  { label: "Name", name: "name", placeholder: "Injamul Haque" },
  { label: "Email", name: "email", placeholder: "ihsomrat.official@gmail" },
  { label: "Date", name: "date", placeholder: "DD/MM/YYYY" },
  { label: "Time", name: "time", placeholder: "MM/HH" },
  { label: "Phone", name: "phone", placeholder: "+880 123 456 789" },
  { label: "No guests", name: "guest", placeholder: "2" },
];

const Reservation = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {};

    formFields.forEach(({ name }) => {
      data[name] = form[name].value;
    });

    console.log(data);
  };

  return (
    <section className="py-20 md:py-[100px] lg:py-[130px] bg-[url('/assets/images/reservation/form-bg-image.avif')] h-full bg-cover">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* start::empty box */}
          <div className="lg:col-span-1"></div>
          {/* end::empty box */}

          {/* start:: reservation form */}
          <div className="w-full md:w-9/12 lg:w-full xl:w-9/12 lg:max-w-[460px] mx-auto border border-primary p-5 md:p-8 rounded-lg bg-secondary text-primary lg:col-span-1">
            <form onSubmit={handleFormSubmit}>
              {/* start:: form title */}
              <h6 className="text-2xl md:text-3xl font-sober">
                Make a reservation
              </h6>
              {/* end:: form title */}

              {/* start:: reservation form fields */}
              <div className="space-y-6 py-6 font-medium ">
                {formFields.map((field) => (
                  <ReservationInputField key={field.name} {...field} />
                ))}
              </div>
              {/* end::  reservation form fields */}

              {/* start:: form submit button */}
              <div>
                <PrimaryButton
                  type="submit"
                  className={"lg:text-base"}
                  buttonText={"Submit"}
                />
              </div>
              {/* form submit button */}
            </form>
          </div>
          {/* end:: reservation form */}
        </div>
      </Container>
    </section>
  );
};

export default Reservation;
