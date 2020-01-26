package damian.tab.bankreality.database.model;

import lombok.Getter;

import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

//@Embeddable
public interface PrimaryKey extends Serializable {
//    @NotNull
//    @GeneratedValue(generator = "credit_generator")
//    @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
//    int id = 0;

}
