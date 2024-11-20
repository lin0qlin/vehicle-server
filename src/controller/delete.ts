import { VehicleStore } from '../store/vehicle';
import { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {}

  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    const idParam = req.params.id; // Extraire l'identifiant du path
    // Parser l'identifiant en nombre
    const id = parseInt(idParam, 10);

    
    const isDeleted = await this.vehicleStore.deleteVehicle({id : id});
      
    res.status(204).send();
      
  

  }
}


