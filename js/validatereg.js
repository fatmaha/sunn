
$(document).ready(function(){

    $('#reg-form').bootstrapValidator({
        message: 'هذه القيمة غير صالحة',
        fields: {
            username: {
                message: 'اسم المستخدم غير صالح',
                validators: {
                    notEmpty: {
                        message: 'اسم المستخدم مطلوب ولا يمكن أن يكون فارغا'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'يجب أن يكون اسم المستخدم أكثر من 6 وأقل من 30 حرفا'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\u0621-\u064A\u0660-\u0669_\.]+$/,
                        message: 'يمكن أن يتكون اسم المستخدم فقط من أبجدي، عدد، نقطة ونقطة سفلية'
                    },
                    different: {
                        field: 'password',
                        message: 'لا يمكن أن يكون اسم المستخدم وكلمة المرور متماثلين مع بعضهما البعض'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'كلمة المرور مطلوبة ولا يمكن أن تكون فارغة'
                    },
                    different: {
                        field: 'username',
                        message: 'لا يمكن أن تكون كلمة المرور هي نفس اسم المستخدم'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'عنوان البريد الإلكتروني مطلوب ولا يمكن أن يكون فارغا'
                    },
                    emailAddress: {
                        message: 'ادخال غير صالح لعنوان بريد الكتروني'
                    }
                }
            },
            about: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 75,
                        message:'الرجاء إدخال 10 أحرف على الأقل ولا يزيد عن 50 حرفا'
                    },
                    notEmpty: {
                        message: 'يرجى تقديم وصف عن نفسك'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء ادخال رقم الهاتف'
                    },
                    regexp: {
                        regexp: /^05(9[987542]|6[982])\d{6}$/,
                        message: 'يمكن ادخال رقم حاملين شريحة جوال أو وطنية فقط'
                    }
                }
            }
        }
    });

});

