import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  dish_name: yup.string().required(),
  price: yup.number().integer().required(),
  ingredients: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
