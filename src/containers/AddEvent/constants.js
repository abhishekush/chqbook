import * as Yup from "yup";

// Event Name, Description, Venue, Price and Discount

export const validationSchema = Yup.object().shape({
  eventName: Yup.string().required("Required"),
  description: Yup.string()
    .required("Required")
    .min(2, "C'mon! What kinda description is that?"),
  venue: Yup.string().required("Required").min(2, "What kinda venue is that?"),
  price: Yup.number()
    .typeError("Should be a number")
    .required("Required")
    .min(0, "Should be greater than 0"),
  discount: Yup.number()
    .typeError("Should be a number")
    .required("Required")
    .min(0, "Should be greater than 0")
    .test("SmallerOrEqualToPrice", "Can't be greater than price", function (
      value
    ) {
      return this.parent.price >= value;
    }),
});

export const initialValues = Object.freeze({
  eventName: "",
  description: "",
  venue: "",
  price: "",
  discount: "",
});
