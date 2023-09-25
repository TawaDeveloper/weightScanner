import { useState } from 'react';
import { t } from 'i18next';
import { Modal, Button, Space, ModalProps, Row, Card } from 'antd';

type IProps = {
  onClose: (type?: string) => void;
};
export default (props: IProps) => {
  const { onClose } = props;
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const handleOk = () => {
    onClose('go');
    setOpen(false);
  };

  const modalProps: ModalProps = {
    title: '',
    open,
    footer: null,
    width: '640px',
    closable: false,
  };

  return (
    <Modal {...modalProps}>
      <Card style={{
        padding: '24px',
        marginBottom: '24px',
        border: 'none'
      }}>{t('pages.orderList.title0115') as string}</Card>
      <Row justify="end">
        <Space>
          <Button onClick={handleClose}>
            {t<string>(`button.common.close`)}
          </Button>
          <Button onClick={handleOk} type="primary">
            {t<string>(`pages.orderList.title0114`)}
          </Button>
        </Space>
      </Row>
    </Modal>
  );
};
