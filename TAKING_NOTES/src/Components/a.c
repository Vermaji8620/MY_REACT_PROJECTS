#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>
int main()
{
    int k = 0;
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            if ((i + j) >= 3)
            {
                printf("%d ", k + 1);
                k += 1;
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}