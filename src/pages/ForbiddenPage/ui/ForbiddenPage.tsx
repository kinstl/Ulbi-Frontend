import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden');

    return <Page>{t('forbiddenPage')}</Page>;
};

export default ForbiddenPage;