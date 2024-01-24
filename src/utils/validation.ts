import dayjs from 'dayjs';
import * as yup from 'yup';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export class Regexes {
  // static phone = /^(0[3|5|7|8|9])+([0-9]{8,9})$/;
  static readonly phoneWithOrWithoutZeroFirst =
    /^(?:(?=0)[0]([0-9]{9,10})|(?:(?=[3|5|7|8|9])[3|5|7|8|9]([0-9]{8,9})))$/;
  static readonly numberOnly = /^\d+$/;

  static readonly email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static readonly username = /^(?=[a-z0-9._]{3,30}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  static readonly alphanumeric = /^[A-Za-z0-9 ]*$/;

  static readonly password = /^([A-Za-z0-9!@#$%^&*._]){6,}$/;

  static readonly vietnameseUnicode =
    /[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]+/;

  static readonly vietnameseAlphanumeric =
    /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]*$/;

  static readonly vietnameseNameWithNumeric =
    /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s\'\"]*$/;

  static readonly vietnameseCharacters =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]*$/;

  static readonly vietnameseNameCharacters =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\'\"\s]*$/;
  static readonly phoneWithElevenNumberAnd84 =
    /^(?:^[1-9]\d{8}|0\d{9}|84[1-9]\d{8})$/;

  static readonly dateOfBirth = /^[0-9]{2}\/[0-9]{2}\/[1-2]{1}[0-9]{3}$/;
}

// export default class Validation {
//   static readonly required = (message?: string) =>
//     yup.string().required(message || trans('_validation:require:default'));

//   static readonly requiredObject = (idKey: string, message?: string) =>
//     yup
//       .object()
//       .test(
//         'is-valid-object',
//         message || trans('_validation:require:default'),
//         value => {
//           if (!value || !Object.keys(value).includes(idKey)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validFullName = (message?: string) =>
//     yup
//       .string()
//       .required(message || trans('_validation:require:default'))
//       .test(
//         'is-alphanumeric',
//         trans('_validation:invalid:alphanumeric_format_only'),
//         value => {
//           if (!value || !Regexes.vietnameseNameCharacters.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validPhone = () =>
//     yup
//       .string()
//       .required(trans('_validation:require:phone'))
//       .test(
//         'is-valid-vn-phone',
//         trans('_validation:invalid:phone_format'),
//         value => {
//           if (!value || !Regexes.phoneWithOrWithoutZeroFirst.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validEmail = (isVatEmail = false) =>
//     yup
//       .string()
//       .required(
//         isVatEmail
//           ? trans('_validation:require:vat_email')
//           : trans('_validation:require:email'),
//       )
//       .test(
//         'is-valid-email',
//         trans('_validation:invalid:email_format'),
//         value => {
//           if (!value || !Regexes.email.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validEmailOptional = () =>
//     yup
//       .string()
//       .nullable()
//       .test(
//         'is-valid-email',
//         trans('_validation:invalid:email_format'),
//         value => {
//           if (value && !Regexes.email.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validPasswordRequired = () =>
//     yup.string().required(trans('_validation:require:password'));

//   static readonly validPasswordBase = () =>
//     this.validPasswordRequired().test(
//       'password-length',
//       trans('_validation:invalid:password_too_short'),
//       value => {
//         if (!value || value.length < 6) {
//           return false;
//         }
//         return true;
//       },
//     );

//   static readonly validPassword = () =>
//     this.validPasswordBase().test(
//       'valid-password',
//       trans('_validation:invalid:password_format'),
//       value => {
//         if (value && !Regexes.password.test(value)) {
//           return false;
//         }
//         return true;
//       },
//     );

//   static readonly validRePassword = (ref: string) =>
//     this.validPassword().oneOf(
//       [yup.ref(ref)],
//       trans('_validation:invalid:password_not_matching'),
//     );

//   static readonly validNewPassword = (ref: string) =>
//     this.validPassword().notOneOf(
//       [yup.ref(ref), null],
//       trans('_validation:invalid:password_is_the_same_old_password'),
//     );

//   static readonly validUsername = () =>
//     yup
//       .string()
//       .required(trans('_validation:require:username'))
//       .min(3, trans('_validation:invalid:username_min_length'))
//       .test(
//         'is-valid-username',
//         trans('_validation:invalid:username_format'),
//         (value: any) => {
//           if (!value || !Regexes.username.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validCompanyName = (message?: string) => {
//     return yup
//       .string()
//       .required(message || trans('_validation:require:company_name'))
//       .test(
//         'is-valid-name-vat',
//         trans('_validation:invalid:alphanumeric_format_only'),
//         value => {
//           if (!value || !Regexes.vietnameseAlphanumeric.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );
//   };
//   static readonly validVatTaxCode = () => {
//     return yup.string().required(trans('_validation:require:tax_code'));
//   };

//   static readonly validPhoneWithElevenNumberAnd84 = () =>
//     yup
//       .string()
//       .required(trans('_validation:require:phone'))
//       .test(
//         'is-valid-vn-phone',
//         trans('_validation:invalid:phone_format'),
//         value => {
//           if (!value || !Regexes.phoneWithElevenNumberAnd84.test(value)) {
//             return false;
//           }
//           return true;
//         },
//       );

//   static readonly validDateOfBirth = () =>
//     yup
//       .string()
//       .nullable()
//       .test(
//         'is-valid-date-of-birth',
//         trans('_validation:invalid:date_of_birth_format'),
//         function (v: any) {
//           dayjs.extend(customParseFormat);
//           if (v) {
//             if (
//               !Regexes.dateOfBirth.test(v) ||
//               !dayjs(v, 'DD/MM/YYYY', true).isValid()
//             ) {
//               return false;
//             }
//             if (
//               dayjs(v, 'DD/MM/YYYY').isBefore('1900-01-01') ||
//               dayjs(v, 'DD/MM/YYYY').isAfter(
//                 `${new Date().getFullYear() - 16}-01-01`,
//               )
//             ) {
//               return this.createError({
//                 message: trans('_validation:invalid:date_of_birth_limit', {
//                   min: '01/01/1900',
//                   max: `01/01/${new Date().getFullYear() - 16}`,
//                 }),
//               });
//             }
//           }
//           return true;
//         },
//       );
// }
//
//
