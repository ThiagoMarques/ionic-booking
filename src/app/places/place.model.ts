export interface Place {
  constructor(
    public id: string,
    public title: string,
    public description,
    public: imageUrl,
    public price: number,
  ) {}
}
