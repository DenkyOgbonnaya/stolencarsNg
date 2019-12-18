const VinInfoComponent = ({vinInfo}) => {
    return(
        <div className="table-responsive">
            <h4>Your result is ready</h4>
            <table className="table table-responsive W-50">
                <tbody>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{vinInfo.manufacturer}</td>
                    </tr>
                    <tr>
                        <td>manfactured in</td>
                        <td>{vinInfo.madeIn}</td>
                    </tr>
                    <tr>
                        <td>engine</td>
                        <td>{vinInfo.engine}</td>
                    </tr>
                    <tr>
                        <td>body style</td>
                        <td>{vinInfo.bodyStyle}</td>
                    </tr>
                    <tr>
                        <td>Model year</td>
                        <td>{vinInfo.modelYear}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default VinInfoComponent;