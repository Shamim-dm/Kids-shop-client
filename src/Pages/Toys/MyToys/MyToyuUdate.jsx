import React from "react";
import { TrashIcon} from '@heroicons/react/24/solid'

const MyToyuUdate = () => {
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th className="flex items-center gap-2">
          <label htmlFor="my-modal-5" className="btn  bg-sky-600 btn-xs">
            Edit
          </label>

          <TrashIcon className="h-6 w-6 text-red-500" />
        </th>
      </tr>
    </tbody>
  );
};

export default MyToyuUdate;
