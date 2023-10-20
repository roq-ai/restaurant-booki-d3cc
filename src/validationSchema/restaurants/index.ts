import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  cuisine_type: yup.string().nullable(),
  opening_hours: yup.date().nullable(),
  closing_hours: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
