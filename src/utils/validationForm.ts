import * as Yup from 'yup'

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationClientSchema = Yup.object().shape({
  name: Yup.string().min(2, 'El nombre es muy corto').max(40, 'El nombre es muy largo').required('Escribe el nombre del cliente'),
  company: Yup.string().required('Escribe el nombre de la empresa del cliente'),
  email: Yup.string().min(2, 'El email es muy corto').max(40, 'El email es muy largo').email('E-mail invalido').required('Escribe el email del cliente'),
  phone: Yup.string().matches(phoneRegExp, 'Escribe un número de teléfono válido'),
  notes: Yup.string()
})