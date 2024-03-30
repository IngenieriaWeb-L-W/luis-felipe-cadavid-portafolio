interface subData {
    [key: string]: string | number | boolean
}

interface dataProps {
    data: Record<string, string | number | boolean | subData>
    textFormat: string
}

export function DataHandler({ data, textFormat }: dataProps) {
    function getColor(percent: number): string {
        if (percent >= 80) {
            return 'bg-green-500'
        } else if (percent >= 60) {
            return 'bg-yellow-500'
        } else {
            return 'bg-red-500'
        }
    }

    return (
        <div>
            {Object.entries(data).map(([category, subData]) => (
                <div key={category} className={textFormat}>
                    <span className='font-bold'>{category}:</span>
                    {typeof subData === 'object' ? (
                        <ul>
                            {Object.entries(subData).map(
                                ([subKey, subValue]) => (
                                    <li
                                        key={subKey}
                                        className='flex items-center space-x-5 px-5'
                                    >
                                        <span className='w-32'>{subKey}:</span>
                                        {typeof subValue === 'string' &&
                                        subValue.endsWith('%') ? (
                                            <div className='flex grow items-center'>
                                                <div className='mr-2 h-4 grow rounded-full bg-gray-200'>
                                                    <div
                                                        className={`h-full rounded-full ${getColor(
                                                            parseInt(subValue),
                                                        )}`}
                                                        style={{
                                                            width: subValue,
                                                        }}
                                                    ></div>
                                                </div>
                                                <span>{subValue}</span>
                                            </div>
                                        ) : (
                                            <span>{subValue}</span>
                                        )}
                                    </li>
                                ),
                            )}
                        </ul>
                    ) : typeof subData === 'string' && subData.endsWith('%') ? (
                        <div className='flex items-center'>
                            <div className='mr-2 h-4 grow rounded-full bg-gray-200'>
                                <div
                                    className={`h-full rounded-full ${getColor(
                                        parseInt(subData),
                                    )}`}
                                    style={{
                                        width: subData,
                                    }}
                                ></div>
                            </div>
                            <span>{subData}</span>
                        </div>
                    ) : (
                        <span>{String(subData)}</span>
                    )}
                </div>
            ))}
        </div>
    )
}
