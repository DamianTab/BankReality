package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.LegalPerson;
import damian.tab.bankreality.database.model.NaturalPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/natural")
@RestController
public class NaturalPersonApi extends GenericRESTApi<NaturalPerson> {
    public NaturalPersonApi(JpaRepository<NaturalPerson, Integer> dao) {
        super(dao);
    }
}
