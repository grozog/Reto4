package tienda_disfraces.reto3.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import tienda_disfraces.reto3.modelo.Disfraz;
import tienda_disfraces.reto3.repositorio.Crud.DisfrazCrudRepositorio;

@Repository
public class DisfrazRepositorio {

    @Autowired
    private DisfrazCrudRepositorio disfrazCrudRepositorio;

    public List<Disfraz> getAll(){
        return(List<Disfraz>) disfrazCrudRepositorio.findAll();

    }

    public Optional<Disfraz> getDisfraz(int id){
        return disfrazCrudRepositorio.findById(id);
    }

    public Disfraz save(Disfraz disfraz){
        return disfrazCrudRepositorio.save(disfraz);
    }

    public void delete(Disfraz disfraz){
        disfrazCrudRepositorio.delete(disfraz);
    }

}
