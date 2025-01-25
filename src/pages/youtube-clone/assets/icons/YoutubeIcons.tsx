const IconBase: React.FC = ({ children }) => {
  return (
    <div className="w-full h-full block fill-black dark:fill-white">
      {children}
    </div>
  );
};

export const House = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5h-5v-7h-3v7h-5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146ZM18.5 9.621l-6.5-6.5-6.5 6.5V19.5H9V13a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.5h3.5V9.621Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const Shorts = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const Subscriptions = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);

//
//

export const ArrowRight = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
    </svg>
  </IconBase>
);
export const PlusIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path>
    </svg>
  </IconBase>
);
export const NotificationIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const SearchIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const MicrophoneIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
    </svg>
  </IconBase>
);
export const YouIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const VerticalTripleDots = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
    </svg>
  </IconBase>
);
export const BellIconSlashed = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path d="m3.85 3.15-.7.7 3.48 3.48C6.22 8.21 6 9.22 6 10.32v5.15l-2 1.88V19h14.29l1.85 1.85.71-.71-17-16.99zM5 18v-.23l2-1.88v-5.47c0-.85.15-1.62.41-2.3L17.29 18H5zm5 2h4c0 1.1-.9 2-2 2s-2-.9-2-2zM9.28 5.75l-.7-.7c.43-.29.9-.54 1.42-.7v-.39c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v4.14l-1-1v-3.05c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03-.27.11-.51.24-.75.4z"></path>
    </svg>
  </IconBase>
);
export const EyeIconSlashed = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path d="m3.85 3.15-.7.7L6.19 6.9C4.31 8.11 2.83 9.89 2 12c1.57 3.99 5.45 6.82 10 6.82 1.77 0 3.44-.43 4.92-1.2l3.23 3.23.71-.71L3.85 3.15zM13.8 14.5c-.51.37-1.13.59-1.8.59-1.7 0-3.09-1.39-3.09-3.09 0-.67.22-1.29.59-1.8l4.3 4.3zM12 17.82c-3.9 0-7.35-2.27-8.92-5.82.82-1.87 2.18-3.36 3.83-4.38L8.79 9.5c-.54.69-.88 1.56-.88 2.5 0 2.25 1.84 4.09 4.09 4.09.95 0 1.81-.34 2.5-.88l1.67 1.67c-1.27.61-2.69.94-4.17.94zm-.51-9.87c.17-.02.34-.05.51-.05 2.25 0 4.09 1.84 4.09 4.09 0 .17-.02.34-.05.51l-1.01-1.01c-.21-1.31-1.24-2.33-2.55-2.55l-.99-.99zM9.12 5.59c.92-.26 1.88-.41 2.88-.41 4.55 0 8.43 2.83 10 6.82-.58 1.47-1.48 2.78-2.61 3.85l-.72-.72c.93-.87 1.71-1.92 2.25-3.13C19.35 8.45 15.9 6.18 12 6.18c-.7 0-1.39.08-2.06.22l-.82-.81z"></path>
    </svg>
  </IconBase>
);

//

export const HistoryIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const PlaylistIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M4 5c-.552 0-1 .448-1 1s.448 1 1 1h16c.552 0 1-.448 1-1s-.448-1-1-1H4Zm-1 5c0-.552.448-1 1-1h16c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1Zm11 3.862c0-.384.415-.625.748-.434L21 17l-6.252 3.573c-.333.19-.748-.05-.748-.435v-6.276ZM4 13c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1H4Zm-1 5c0-.552.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const VideosIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const ClockIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M20.5 12c0 4.694-3.806 8.5-8.5 8.5S3.5 16.694 3.5 12 7.306 3.5 12 3.5s8.5 3.806 8.5 8.5Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.25-5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.375l.3.225 4 3c.331.248.802.181 1.05-.15.248-.331.181-.801-.15-1.05l-3.7-2.775V7Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const ThumbsUpIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M14.813 5.018 14.41 6.5 14 8h5.192c.826 0 1.609.376 2.125 1.022.711.888.794 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h2v.282c0-.834.26-1.647.745-2.325L12 1l1.1.472c1.376.59 2.107 2.103 1.713 3.546ZM7 10.5H5c-.276 0-.5.224-.5.5v8c0 .276.224.5.5.5h2v-9Zm10.5 9h-9V9.282c0-.521.163-1.03.466-1.453l3.553-4.975c.682.298 1.043 1.051.847 1.77l-.813 2.981c-.123.451-.029.934.255 1.305.284.372.725.59 1.192.59h5.192c.37 0 .722.169.954.459.32.399.357.954.094 1.393l-.526.876c-.241.402-.28.894-.107 1.33l.165.412c.324.81.203 1.73-.32 2.428l-.152.202c-.195.26-.3.575-.3.9v.5c0 .828-.672 1.5-1.5 1.5Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);
export const ScissorsIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="m8.042 9.456-.716.08c-.732.08-1.486-.16-2.043-.718-.977-.976-.977-2.559 0-3.535.976-.977 2.559-.977 3.535 0 .558.557.798 1.312.717 2.044l-.079.715.51.51 10.13 10.13c-.97.643-2.291.537-3.146-.318l-4.951-4.951-1.061 1.06 4.951 4.952c1.442 1.442 3.712 1.553 5.282.331.13-.1.255-.212.375-.331l.707-.707-1.06-1.061L15.534 12l5.657-5.657 1.06-1.06-.706-.708c-.12-.12-.245-.23-.376-.331-1.569-1.222-3.839-1.111-5.281.331L13.06 7.404l1.061 1.06 2.829-2.828c.855-.855 2.175-.961 3.146-.318l-4.56 4.56 1.06 1.061L15.536 12l-4.51-4.51c.128-1.164-.254-2.375-1.147-3.268-1.562-1.562-4.095-1.562-5.657 0-1.562 1.562-1.562 4.095 0 5.657.893.893 2.104 1.276 3.269 1.147l2.033 2.033 1.06-1.06-2.033-2.033-.509-.51Zm-.285-3.113c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.024 0 1.415.39.39 1.024.39 1.414 0 .39-.391.39-1.024 0-1.415Zm-.43 8.122.715.079.51-.51.973-.973L8.465 12l-.975.974c-1.165-.128-2.375.254-3.268 1.147-1.562 1.562-1.562 4.095 0 5.657 1.562 1.562 4.094 1.562 5.657 0 .893-.893 1.275-2.104 1.147-3.269l.974-.973-1.06-1.061-.975.974-.509.509.079.716c.08.732-.16 1.486-.717 2.044-.976.976-2.56.976-3.536 0-.976-.977-.976-2.56 0-3.536.558-.558 1.312-.798 2.044-.717Zm-.984 3.192c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);

// youtube logo and variations

export const YoutubeLogoIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <g>
        <path
          fill="#FF0033"
          d="M21.58,7.19c-0.23-0.86-0.91-1.54-1.77-1.77C18.25,5,12,5,12,5S5.75,5,4.19,5.42   C3.33,5.65,2.65,6.33,2.42,7.19C2,8.75,2,12,2,12s0,3.25,0.42,4.81c0.23,0.86,0.91,1.54,1.77,1.77C5.75,19,12,19,12,19   s6.25,0,7.81-0.42c0.86-0.23,1.54-0.91,1.77-1.77C22,15.25,22,12,22,12S22,8.75,21.58,7.19z"
        ></path>
        <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
      </g>
    </svg>
  </IconBase>
);
export const YoutubeSlantedLogoIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <g>
        <g>
          <path
            fill="#FF0033"
            d="M22.64,13.2c-0.01-1.04-0.62-5.98-0.9-6.74c-0.19-0.5-0.58-1.4-1.31-1.95c-0.94-0.7-1.7-0.83-2.68-0.85    C17.06,3.64,6.12,5.03,4.79,5.51C3.8,5.88,3.03,6.35,2.42,6.95c-0.99,0.98-1.18,1.93-1.02,3.6c0.14,1.52,0.85,6.55,1.21,7.59    c0.39,1.15,1.11,2.03,2.3,2.16c3.62,0.39,4.48-1.6,12.9-1.58c2.55,0.01,3.82-1.11,4.35-2.08C22.77,15.49,22.65,13.99,22.64,13.2z"
          ></path>
          <path
            fill="#212121"
            d="M17.47,4.04C17.47,4.04,17.48,4.04,17.47,4.04c0.94,0.02,1.67,0.14,2.56,0.81    c0.7,0.53,1.08,1.39,1.25,1.86c0.28,0.73,0.85,5.44,0.86,6.43c0.01,0.76,0.12,2.19-0.47,3.28c-0.5,0.92-1.71,1.98-4.13,1.98    c-0.01,0-0.01,0-0.02,0c-0.04,0-0.07,0-0.11,0c-7.23,0-8.55,1.56-11.33,1.56c-0.27,0-0.56-0.02-0.87-0.05    c-1.13-0.12-1.82-0.96-2.19-2.06c-0.34-0.99-1.01-5.79-1.15-7.24c-0.15-1.6,0.03-2.51,0.98-3.44c0.58-0.57,1.32-1.02,2.27-1.37    C6.38,5.35,16.73,4.04,17.47,4.04 M17.47,3.2c-0.47,0-3.53,0.37-6.09,0.72C8.82,4.27,5.6,4.75,4.84,5.03    c-1.06,0.39-1.9,0.9-2.56,1.56C1.05,7.8,0.9,9.06,1.05,10.7c0.12,1.27,0.8,6.28,1.19,7.43c0.53,1.55,1.55,2.48,2.89,2.62    c0.33,0.04,0.64,0.05,0.96,0.05c1.17,0,2.1-0.25,3.18-0.54c1.69-0.45,3.8-1.02,8.15-1.02l0.11,0l0.02,0    c1.07,0,3.68-0.24,4.86-2.42c0.63-1.17,0.6-2.59,0.58-3.43c0-0.09,0-0.18-0.01-0.26c-0.01-1.01-0.59-5.85-0.92-6.72    c-0.38-1-0.89-1.75-1.53-2.23c-1.05-0.79-1.94-0.96-3.04-0.98l-0.01,0L17.47,3.2L17.47,3.2z"
          ></path>
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M15.28,11.85c-0.03,0.02-0.05,0.03-0.08,0.05c-0.21,0.14-0.42,0.28-0.63,0.43    c-0.49,0.33-3.33,2.26-3.33,2.26c-0.24,0.18-0.7,0.47-0.87,0.38c-0.17-0.09-0.23-0.72-0.27-1.02l-0.01-0.07    c-0.05-0.36-0.46-3.83-0.51-4.21C9.56,9.56,9.5,9.17,9.62,9.08c0.13-0.1,0.47,0.01,0.58,0.05c0.66,0.21,3.93,1.35,4.95,1.86    c0.03,0.02,0.06,0.03,0.1,0.04c0.15,0.06,0.35,0.15,0.35,0.39C15.6,11.65,15.42,11.76,15.28,11.85z"
          ></path>
          <path
            fill="#212121"
            d="M10.04,9.59c1.14,0.38,3.77,1.32,5.01,1.87c-0.15,0.1-0.3,0.2-0.45,0.3c-0.58,0.39-3.94,2.68-3.94,2.68    l-0.02,0.01l-0.02,0.01c0,0,0,0,0,0c0-0.03-0.01-0.05-0.01-0.07l-0.02-0.13l-0.01-0.08c-0.04-0.31-0.31-2.58-0.48-3.94    C10.08,9.98,10.06,9.76,10.04,9.59 M9.4,8.56c-0.07,0-0.14,0.01-0.18,0.05c-0.15,0.11-0.07,0.58-0.05,0.7    c0.05,0.45,0.54,4.56,0.6,4.99l0.01,0.08c0.05,0.36,0.12,1.1,0.33,1.21c0.03,0.01,0.06,0.02,0.1,0.02c0.25,0,0.68-0.28,0.93-0.47    c0,0,3.36-2.29,3.94-2.68c0.25-0.17,0.5-0.34,0.75-0.51c0.03-0.02,0.06-0.04,0.1-0.06c0.17-0.1,0.38-0.23,0.38-0.5    c-0.01-0.29-0.24-0.39-0.41-0.46c-0.04-0.02-0.08-0.03-0.11-0.05c-1.21-0.61-5.09-1.96-5.87-2.21C9.8,8.63,9.58,8.56,9.4,8.56    L9.4,8.56z"
          ></path>
        </g>
      </g>
    </svg>
  </IconBase>
);
export const YoutubeStudioLogoIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <g>
        <path
          fill="#FF0033"
          d="M11.13,1.21c0.48-0.28,1.26-0.28,1.74,0l8.01,4.64c0.48,0.28,0.87,0.97,0.87,1.53v9.24   c0,0.56-0.39,1.25-0.87,1.53l-8.01,4.64c-0.48,0.28-1.26,0.28-1.74,0l-8.01-4.64c-0.48-0.28-0.87-0.97-0.87-1.53V7.38   c0-0.56,0.39-1.25,0.87-1.53L11.13,1.21z"
        ></path>
        <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
        <path
          fill="#FFFFFF"
          d="M12,6c0.11,0,0.19,0.03,0.21,0.04l4.89,2.82c0.05,0.03,0.14,0.2,0.14,0.37v5.67c0,0.17-0.09,0.34-0.14,0.37   l-4.9,2.83c-0.03,0.01-0.1,0.04-0.21,0.04c-0.11,0-0.19-0.03-0.21-0.04l-4.9-2.83c-0.05-0.03-0.15-0.2-0.15-0.37V9.24   c0-0.17,0.1-0.34,0.14-0.37l4.9-2.83C11.82,6.03,11.89,6,12,6 M12,5c-0.25,0-0.51,0.06-0.71,0.18L6.39,8   C5.99,8.23,5.75,8.77,5.75,9.24v5.67c0,0.47,0.24,1,0.64,1.24l4.9,2.83c0.2,0.12,0.46,0.18,0.71,0.18c0.25,0,0.51-0.06,0.71-0.18   l4.9-2.83c0.41-0.24,0.64-0.77,0.64-1.24V9.24c0-0.47-0.23-1-0.64-1.24l-4.9-2.82C12.51,5.06,12.26,5,12,5L12,5z"
        ></path>
      </g>
    </svg>
  </IconBase>
);
export const YoutubeMusicLogoIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <g>
        <circle
          id="XMLID_4814__yt144"
          fill="#FF0033"
          cx="12"
          cy="12"
          r="11"
        ></circle>
        <path
          fill="#FFFFFF"
          d="M12,6.25c3.17,0,5.75,2.58,5.75,5.75s-2.58,5.75-5.75,5.75S6.25,15.17,6.25,12S8.83,6.25,12,6.25 M12,5.25   c-3.73,0-6.75,3.02-6.75,6.75s3.02,6.75,6.75,6.75s6.75-3.02,6.75-6.75S15.73,5.25,12,5.25L12,5.25z"
        ></path>
        <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
      </g>
    </svg>
  </IconBase>
);

export const FlagIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M4.75 3H4v18.25c0 .414.336.75.75.75s.75-.336.75-.75V14H11l.585 1.17c.254.509.774.83 1.342.83H18.5c.828 0 1.5-.672 1.5-1.5v-8c0-.828-.672-1.5-1.5-1.5H13l-.585-1.17C12.16 3.32 11.64 3 11.073 3H4.75Zm.75 9.5h6.427l.415.83.585 1.17H18.5v-8h-6.427l-.415-.83-.585-1.17H5.5v8Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);

export const HelpBubbleIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M3.5 12c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5S3.5 7.306 3.5 12ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm2.245 7.505v-.003l-.003-.045c-.004-.044-.012-.114-.03-.2-.034-.174-.103-.4-.234-.619-.234-.39-.734-.883-1.978-.883s-1.744.494-1.978.883c-.131.22-.2.445-.235.62-.017.085-.025.155-.029.2l-.003.044v.004c-.004.415-.34.749-.755.749-.417 0-.755-.338-.755-.755H9h-.755v-.022l.001-.036.008-.114c.008-.092.023-.218.053-.367.058-.294.177-.694.42-1.1.517-.86 1.517-1.616 3.273-1.616 1.756 0 2.756.756 3.272 1.617.244.405.363.805.421 1.1.03.148.046.274.053.366l.008.114v.036l.001.013v.008L15 9.5h.755c0 .799-.249 1.397-.676 1.847-.374.395-.853.634-1.202.808l-.04.02c-.398.2-.646.333-.82.516-.136.143-.262.358-.262.809 0 .417-.338.755-.755.755s-.755-.338-.755-.755c0-.799.249-1.397.676-1.847.374-.395.853-.634 1.202-.808l.04-.02c.398-.2.646-.333.82-.516.135-.143.261-.356.262-.804ZM12 18.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);

export const ExclamationBubbleIcon = () => (
  <IconBase>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
    >
      <path
        clip-rule="evenodd"
        d="M6.379 17.5H19c.276 0 .5-.224.5-.5V5c0-.276-.224-.5-.5-.5H5c-.276 0-.5.224-.5.5v14.379l1.44-1.44.439-.439Zm-1.879 4-.033.033-.26.26-.353.353c-.315.315-.854.092-.854-.353V5c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H7l-2.5 2.5ZM12 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1Zm0 9.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </IconBase>
);

//

export const FlameIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m14 2-1.5.886-5.195 3.07C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-1.5 1-3 2L14 5V2ZM8.068 7.248l4.432-2.62v3.175l2.332-1.555L18.5 3.803V13.5c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-2.568 1.357-4.946 3.568-6.252ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z" fill-rule="evenodd"></path></svg></IconBase>);
export const BagIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M12 2.5c-.328 0-.653.065-.957.19-.303.126-.579.31-.81.542-.233.232-.417.508-.543.811-.125.304-.19.629-.19.957v1h5V5c0-.328-.065-.653-.19-.957-.126-.303-.31-.579-.542-.81-.232-.233-.508-.417-.811-.543-.304-.125-.629-.19-.957-.19ZM16 5v1h3.5c.828 0 1.5.672 1.5 1.5V18c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V7.5C3 6.672 3.672 6 4.5 6H8V5c0-.525.103-1.045.304-1.53.201-.486.496-.927.868-1.298.371-.372.812-.667 1.297-.868C10.955 1.104 11.475 1 12 1c.525 0 1.045.103 1.53.304.486.202.927.496 1.298.868.372.371.667.812.867 1.297C15.896 3.955 16 4.475 16 5Zm-4 7.5c-.328 0-.653-.065-.957-.19-.303-.126-.579-.31-.81-.542-.233-.232-.417-.508-.543-.811-.125-.304-.19-.629-.19-.957 0-.414-.336-.75-.75-.75S8 9.586 8 10c0 .525.103 1.045.304 1.53.201.486.496.927.868 1.298.371.372.812.667 1.297.867.486.201 1.006.305 1.531.305.525 0 1.045-.104 1.53-.305.486-.2.927-.495 1.298-.867.372-.371.667-.812.867-1.297.201-.486.305-1.006.305-1.531 0-.414-.336-.75-.75-.75s-.75.336-.75.75c0 .328-.065.653-.19.957-.126.303-.31.579-.542.81-.232.233-.508.417-.811.543-.304.125-.629.19-.957.19Zm-7.5-5h15V18c0 1.38-1.12 2.5-2.5 2.5H7c-1.38 0-2.5-1.12-2.5-2.5V7.5Z" fill-rule="evenodd"></path></svg></IconBase>);
export const MusicIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M19 3c0-.271-.146-.521-.383-.654-.237-.133-.527-.127-.758.014l-9 5.5c-.223.136-.359.379-.359.64v7.901C8.059 16.146 7.546 16 7 16c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-7.08l7.5-4.583v6.064c-.441-.255-.954-.401-1.5-.401-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3Zm-1.5 13c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm-9 3c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm9-13.42L10 10.162V8.92l7.5-4.584V5.58Z" fill-rule="evenodd"></path></svg></IconBase>);
export const MovieIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m3.116 5.998 16.79-2.66.157.988-16.79 2.66-.157-.988Zm-1.481.235c-.13-.819.428-1.587 1.247-1.717l16.79-2.659c.819-.13 1.587.429 1.716 1.247l.157.988.234 1.481-1.481.235L6.463 7.999H22v11.5c0 .829-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.671-1.5-1.5V8.539L1.79 7.22l-.156-.987Zm7.698 3.266h-2L9 11.999H6l-1.667-2.5H3.5v10h17v-10h-3.167L19 12h-3l-1.667-2.501h-2L14 12h-3L9.333 9.499Z" fill-rule="evenodd"></path></svg></IconBase>);
export const LiveIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M5.636 5.636c.293-.293.293-.768 0-1.06-.293-.294-.768-.294-1.06 0-.976.974-1.75 2.132-2.277 3.406C1.772 9.256 1.5 10.622 1.5 12c0 1.379.272 2.744.8 4.018.527 1.274 1.3 2.432 2.275 3.407.293.293.768.293 1.061 0 .293-.293.293-.768 0-1.061-.836-.836-1.499-1.828-1.95-2.92C3.232 14.352 3 13.182 3 12s.233-2.352.685-3.444c.452-1.092 1.115-2.084 1.951-2.92Zm2.828 1.768c.293.292.293.767 0 1.06-.464.464-.832 1.016-1.083 1.622C7.129 10.693 7 11.343 7 12c0 .656.13 1.306.38 1.913.252.607.62 1.158 1.084 1.622.293.293.293.768 0 1.06-.292.294-.767.294-1.06 0-.604-.603-1.083-1.32-1.41-2.108C5.669 13.7 5.5 12.853 5.5 12c0-.854.168-1.7.495-2.488.326-.788.805-1.505 1.409-2.108.293-.293.768-.293 1.06 0Zm7.072 0c.292-.293.767-.293 1.06 0C17.816 8.623 18.5 10.276 18.5 12c0 1.724-.685 3.377-1.904 4.596-.293.293-.768.293-1.06 0-.293-.293-.293-.768 0-1.06C16.473 14.597 17 13.325 17 12s-.527-2.598-1.464-3.536c-.293-.293-.293-.768 0-1.06Zm2.828-2.829c.293-.293.768-.293 1.06 0C21.395 6.545 22.5 9.215 22.5 12s-1.106 5.456-3.075 7.425c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061C20.052 16.676 21 14.387 21 12s-.948-4.676-2.636-6.364c-.293-.293-.293-.768 0-1.06ZM12 14c1.105 0 2-.895 2-2 0-1.104-.895-2-2-2s-2 .896-2 2c0 1.105.895 2 2 2Z" fill-rule="evenodd"></path></svg></IconBase>);
export const GameIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m12 7.75-.772-.464-4.186-2.511L2.5 7.803v6.307L12 19.29l9.5-5.181V7.803l-4.542-3.028-4.186 2.511L12 7.75ZM12 6 7.814 3.488c-.497-.298-1.122-.283-1.604.039L1.668 6.555C1.251 6.833 1 7.3 1 7.803v6.307c0 .548.3 1.054.782 1.316l9.5 5.182c.447.244.989.244 1.436 0l9.5-5.182c.482-.262.782-.768.782-1.316V7.803c0-.502-.25-.97-.668-1.248L17.79 3.527c-.482-.322-1.107-.337-1.604-.039L12 6Zm3.5 6.25c0 .69-.56 1.25-1.25 1.25S13 12.94 13 12.25 13.56 11 14.25 11s1.25.56 1.25 1.25ZM7 8c-.414 0-.75.336-.75.75v1.5h-1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.5v1.5c0 .414.336.75.75.75s.75-.336.75-.75v-1.5h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.5v-1.5C7.75 8.336 7.414 8 7 8Zm10.75 3c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z" fill-rule="evenodd"></path></svg></IconBase>);
export const NewsIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M2 5.121V3l.94.94.56.56.5.5.94-.94.12-.12L6 3l.94.94.12.12L8 5l.94-.94.12-.12L10 3l.94.94.12.12L12 5l.94-.94.12-.12L14 3l.94.94.12.12L16 5l.94-.94.12-.12L18 3l.94.94.12.12L20 5l.5-.5.56-.56L22 3v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5.121ZM10.75 19.5h-4.5v-5.25h4.5v5.25Zm1.25 0V13H5v6.5H4c-.276 0-.5-.224-.5-.5V7.65l2.514-2.514.925.925L8 7.12l1.06-1.06.94-.94.94.94L12 7.12l1.06-1.06.94-.94.94.94L16 7.12l1.06-1.06.926-.925L20.5 7.65V19c0 .276-.224.5-.5.5h-8ZM19 9v2H5V9h14Zm-5 4h5v1.5h-5V13Zm5 3h-5v1.5h5V16Z" fill-rule="evenodd"></path></svg></IconBase>);
export const TrophyIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M6.5 3.5h11V9c0 3.038-2.462 5.5-5.5 5.5S6.5 12.038 6.5 9V3.5ZM5 3.5C5 2.672 5.672 2 6.5 2h11c.828 0 1.5.672 1.5 1.5V4h2c.552 0 1 .448 1 1v3c0 2.493-1.825 4.56-4.212 4.938-1.082 1.588-2.8 2.707-4.788 2.991V17.5h1.5c.828 0 1.5.672 1.5 1.5v3H8v-3c0-.828.672-1.5 1.5-1.5H11v-1.57c-1.987-.285-3.706-1.404-4.788-2.992C3.825 12.56 2 10.493 2 8V5c0-.552.448-1 1-1h2v-.5Zm0 1.75H3.25V8c0 1.508.89 2.808 2.174 3.403C5.15 10.654 5 9.845 5 9V5.25Zm13.576 6.153C19.86 10.808 20.75 9.508 20.75 8V5.25H19V9c0 .844-.15 1.654-.424 2.403ZM9.5 20.5V19h5v1.5h-5Z" fill-rule="evenodd"></path></svg></IconBase>);
export const GraduationIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M11.271 2.689a1.5 1.5 0 011.457 0l9 5A1.5 1.5 0 0122.5 9v7a.75.75 0 01-1.5 0v-5.284l-1.5.833V17a.75.75 0 01-.741.75c-1.9.023-3.076.4-3.941.896-.71.407-1.229.895-1.817 1.448-.159.149-.322.302-.496.46a.75.75 0 01-1.046-.034l-.076-.08c-.702-.73-1.303-1.355-2.164-1.832-.875-.485-2.074-.84-3.976-.858A.75.75 0 014.5 17v-5.45l-2.228-1.24a1.5 1.5 0 010-2.622l9-5ZM6 12.383v3.891c1.703.096 2.946.468 3.946 1.022.858.475 1.508 1.07 2.08 1.652.575-.54 1.221-1.13 2.046-1.603.988-.566 2.215-.963 3.928-1.068v-3.894l-5.272 2.928a1.5 1.5 0 01-1.457 0L6 12.383ZM12 4l9 5-9 5-9-5 9-5Z" fill-rule="evenodd"></path></svg></IconBase>);
export const PodcastIcon = () => (<IconBase><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M7.278 4.933C8.675 3.999 10.318 3.5 12 3.5c1.681 0 3.325.499 4.722 1.433 1.398.934 2.488 2.261 3.13 3.814.644 1.553.813 3.262.485 4.911-.328 1.65-1.138 3.164-2.327 4.352-.293.293-.293.768 0 1.061.293.293.768.293 1.061 0 1.399-1.399 2.351-3.18 2.737-5.12.386-1.94.188-3.95-.57-5.778-.756-1.827-2.038-3.389-3.682-4.488C15.91 2.586 13.978 2 12 2c-1.978 0-3.911.586-5.556 1.685-1.644 1.1-2.926 2.66-3.683 4.488-.757 1.827-.955 3.838-.569 5.778.386 1.94 1.338 3.721 2.737 5.12.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06-1.188-1.19-1.998-2.704-2.326-4.353-.328-1.649-.16-3.358.484-4.91.643-1.554 1.733-2.881 3.13-3.815ZM12 7.5c-.89 0-1.76.264-2.5.758-.74.495-1.317 1.198-1.657 2.02-.341.822-.43 1.727-.257 2.6.174.873.603 1.675 1.232 2.304.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0-.84-.839-1.411-1.908-1.643-3.072-.231-1.163-.112-2.37.342-3.466S7.68 7.67 8.667 7.01C9.653 6.351 10.813 6 12 6c1.187 0 2.347.352 3.333 1.011.987.66 1.756 1.597 2.21 2.693.454 1.096.573 2.303.342 3.466-.232 1.164-.803 2.233-1.642 3.073-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061.63-.63 1.058-1.431 1.231-2.304.174-.873.085-1.778-.256-2.6-.34-.822-.917-1.525-1.657-2.02-.74-.494-1.61-.758-2.5-.758Zm.875 6.299C13.541 13.474 14 12.79 14 12c0-1.105-.895-2-2-2s-2 .895-2 2c0 .79.459 1.474 1.125 1.799V21c0 .483.392.875.875.875s.875-.392.875-.875v-7.201Z" fill-rule="evenodd"></path></svg></IconBase>);
