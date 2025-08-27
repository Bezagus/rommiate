import { BellIcon, H5, H6, Link, P } from '@/styles';
import { useNotifications } from '@/components/Header/Notifications/useNotifications';
import ReactDOM from 'react-dom';

const Notifications = () => {
  const { ref, isHovered, menuPos, handleMouseEnter, handleMouseLeave, newNotification } =
    useNotifications();

  return (
    <>
      <div
        ref={ref}
        className="flex items-center gap-2 hover:cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {newNotification && (
          <div className="h-2 w-2 bg-primary rounded-full absolute top-0 right-0" />
        )}
        <BellIcon />
      </div>
      {isHovered &&
        ReactDOM.createPortal(
          <div
            style={{
              top: menuPos.top + 10,
              left: menuPos.left - 140,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex flex-col gap-2 bg-white rounded-lg p-2 w-[300px] h-[400px] fixed z-[1000]"
          >
            <H5 className="border-b border-gray p-2">Notificacion</H5>
            <div className="space-y-2">
              <Link className="bg-primary-50 p-2 rounded-md flex items-start">
                <div className="w-full">
                  <P className="w-full text-start">Nueva Notificacion</P>
                  <P className="w-full text-start opacity-50" size="small">
                    Descripcion
                  </P>
                </div>
              </Link>
              <div className="bg-gray p-2 rounded-md">
                <div className="opacity-50">
                  <P>Nueva Notificacion</P>
                  <P size="small">Descripcion</P>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Notifications;
