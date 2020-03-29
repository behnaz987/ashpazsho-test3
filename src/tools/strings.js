import makeStyles from "@material-ui/core/styles/makeStyles";

export const zwnj = '‌';
export const appName = 'آشپز شو، قناد شو';
export const pageName = 'سته بندی غذایی/حلوا';
export const strings = {

    card: {
        vpizza: 'پیتزای سبزیجات',
        fastFood: 'فست فود',
        free: 'رایگان',
        freeDownload: 'دانلود رایگان',
        clock: '1:45',
        cake: "کیک",
        sweets: 'شیرینی مجلسی'
    },
    footer: {
        add: 'آدرس',
        phone: 'شماره تماس',
        phoneNumber: '02166715466',
        socialMedia: 'لینک شبکه های اجتماعی',
        tel: 'نکات و ترفندهای آموزش + تخفیف های ویژه',
        ins: 'آموزش، کلیپ ها و ترفندهای یک دقیقه ای آموزشی'

    },
    drawer: {
        signUp: 'ثبت نام',
        login: 'ورود',
        recommendedCourses: `دوره${zwnj}های پیشنهادی حضوری و آنلاین`,
        online: 'آنلاین',
        presentment: 'حضوری',
        priceUnit: 'تومان',
        course1: 'آموزش آنلاین پخت پیتزا',
        course2: 'آموزش حضوری پخت پیتزا',
        mainPage: 'صفحه اصلی',
        learningCourses: `دوره${zwnj}های آموزشی`,
        learningClips: `فیلم${zwnj}های آموزشی`,
        contactUs: 'ارتباط با ما',
        aboutUs: 'درباره ما',
        signInUp: 'ورود/ثبت نام',
        packages: `پکیج${zwnj}ها`,
        foodCategories: `دسته${zwnj}بندی غذایی`,
        recommendationsAndOffers: `پیشنهادها و تخفیف${zwnj}ها`,
        exit: 'خروج'
    }
}
export const colors = {
    backgroundMainColor: {
        background: '#FF364A'
    },
    fontMainColor: {
        color: '#FF364A'
    },
    fontGreenColor: {
        color: '#03B40F'
    },
    fontWhiteColor: {
        color: '#FFFFFF'
    },
    backgroundGreenColor: {
        background: '#03B40F'
    },
    backgroundLightMainColor: {
        background: '#FE5F6F',
    },
    fontDarkMainColor: {
        color: '#CD1626',
    },
    fontGrayColor: {
        color: '#8d8d8d'
    },
    backgroundGrayColor: {
        background: '#EEEEEE'
    }
}
export const genericStyles = makeStyles(theme => ({
    genericFullWidth: {
        width: '100%'
    },
    ltr: {
        flip: false,
        textAlign: 'left',
        direction: 'ltr',
    },
    inlineFlex: {
        display: 'inline-flex'
    },
    centerJustifyContent: {
        justifyContent: 'center'
    },
    genericAutoWidth: {
        width: 'auto'
    },
    centerAlignItems: {
        alignItems: 'center'
    },
    flexEndJustifyContent: {
        justifyContent: 'flex-end'
    }
}));
