'use client';

export default function TestPublish() {

  

  return (
    <div>
      <div className="flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 20v-8.15l-2.6 2.6L7 13l5-5l5 5l-1.4 1.45l-2.6-2.6V20zM4 9V6q0-.825.588-1.412T6 4h12q.825 0 1.413.588T20 6v3h-2V6H6v3z"
            />
          </svg>
        </div>
        <p>Publish Software</p>
      </div>
      <div>
        <div>
          <label htmlFor="seviceName">{"Software/Service's Name *"}</label><br />
          <input type="text" id="serviceName" />
        </div>
        <div>
          <label htmlFor="seviceName">Description *</label><br />
          <input type="text" id="serviceName" />
        </div>
        <div className="flex place-content-between">
          <div>
            <label htmlFor="seviceName">Category *</label><br />
            <input type="text" id="serviceName" />
          </div>
          <div>
            <label htmlFor="seviceName">Company</label><br />
            <input type="text" id="serviceName" />
          </div>
        </div>
        <div>
          <label htmlFor="seviceName">Logo *</label>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
                />
              </svg>
            </div>
            <button>Browse Files</button>
            <p>Supported formats: JPEG, PNG</p>
          </div>
        </div>
      </div>
      <div className="relative h-10">
        <button className="absolute right-0 mr-10">Publish</button>
      </div>
    </div>
  );
}
