import { ChevronIcon, CloseIcon, H5, Link, MessageIcon, P } from '@/styles';
import ReactDOM from 'react-dom';
import { useMessage } from '@/components/Header/Message/useMessage';
import classNames from 'classnames';

const Message = () => {
  const { isHovered, onClick, ref, newMessage, expanded, setExpanded, setIsHovered, menuPos } =
    useMessage();

  return (
    <>
      <div
        ref={ref}
        onClick={onClick}
        className="flex items-center gap-2 hover:cursor-pointer relative"
      >
        {newMessage && <div className="h-2 w-2 bg-primary rounded-full absolute top-0 right-0" />}
        <MessageIcon />
      </div>
      {isHovered &&
        ReactDOM.createPortal(
          <div
            style={{
              bottom: 0,
              left: menuPos.left,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              borderRadius: '8px 8px 0  0 ',
            }}
            className="flex flex-col gap-2 bg-white p-2 w-[300px] fixed z-[1000]"
          >
            <div className="border-b border-gray px-2 pb-2 flex justify-between">
              <H5>Mensajes</H5>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setExpanded(!expanded);
                  }}
                >
                  <ChevronIcon
                    size={16}
                    className={classNames(expanded ? 'rotate-90' : '-rotate-90')}
                  />
                </button>
                <button
                  onClick={() => {
                    setIsHovered(false);
                  }}
                >
                  <CloseIcon size={16} />
                </button>
              </div>
            </div>
            {expanded && (
              <div className="h-[400px] overflow-y-auto">
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
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
};

export default Message;
