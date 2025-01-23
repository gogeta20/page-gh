import { useMeToast } from "@/core/hooks/ToastStore";
import { pokemon } from "@/modules/home/domain/models/Pokemon";
import type { IRepository } from "@/modules/home/domain/repositories/IRepository";

export class GetItem {
  private repository: IRepository;

  constructor(repo: IRepository) {
    this.repository = repo;
  }
  async execute() {

    const meToast = useMeToast();
    try {
      this.repository.setEndPoint('/pokemon');
      const data = await this.repository.send();
      meToast.addToast({ message: 'Ítem creado con éxito', type: 'success', duration: 5000 });
      return data;
    } catch (error) {
      console.error('Error fetching home data:', error);
      meToast.addToast({ message: 'error', type: 'error', duration: 4000 });

      throw error;
    }
  }
}
