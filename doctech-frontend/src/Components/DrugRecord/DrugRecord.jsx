import { uid } from 'uid';
  export default function DrugRecord({data}) {
    return (
      <div className="flex flex-col w-2/3">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full w-5/6 divide-y divide-gray-200 sm:w-full overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Drug Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name of Drug/Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unit Size
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left w-1/6 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MRP 
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left w-2 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Therapeutic Group 
                    </th>
    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((med) => (
                        <tr key={uid()}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{''}</div>
                              <div className="text-sm text-gray-500">{med["Drug Code"]}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm  break-normal text-gray-500">{med["Name of the Product"]}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {med["Unit Size"]}
                          </span>
                        </td>
                        <td className="px-6 py-4 w-40 whitespace-nowrap text-sm text-gray-500">{med.MRP}</td>
                        <td className="px-6 py-4  text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            {med["Therapeutic Group"]}
                          </a>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  